import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getMyTodos from "app/todos/queries/getMyTodos"
import Card from "../Card"

const ITEMS_PER_PAGE = 100

export const TodosList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ todos, hasMore }] = usePaginatedQuery(getMyTodos, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <Card todos={todos} />

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const TodosPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Todos</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewTodoPage()}>
            <a>Create Todo</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <TodosList />
        </Suspense>
      </div>
    </>
  )
}

TodosPage.authenticate = true
TodosPage.getLayout = (page) => <Layout title="Todos list">{page}</Layout>

export default TodosPage

import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { Link, Routes } from "blitz"
import Typography from "@mui/material/Typography"

export default function BasicCard({ todos }) {
  return (
    <ul style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      {todos.map((todo) => (
        <Card key={todo.id} sx={{ minWidth: 20 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              List of todos
            </Typography>
            <Typography variant="h5" component="div">
              <li key={todo.id}>
                <Link href={Routes.ShowTodoPage({ todoId: todo.id })}>
                  <a>
                    {todo.title} : {todo.status}
                  </a>
                </Link>
              </li>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </ul>
  )
}

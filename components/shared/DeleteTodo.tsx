"use client"


import { deleteTodo } from "@/app/actions/todoActions"
import { todoType } from "@/types/todoType"
import Button from "../ui/Button"
import Form from "../ui/Form"
import Input from "../ui/Input"
import { BsFillTrashFill } from "react-icons/bs"


interface TodoProps {
    todo: todoType
}

const DeleteTodo = ({ todo }: TodoProps) => {
    return (
        <Form action={deleteTodo}>
            <Input type="hidden" name="inputId" value={todo.id} />
            <Button actionButton type="submit" text={<BsFillTrashFill />} />
        </Form>
    )
}

export default DeleteTodo
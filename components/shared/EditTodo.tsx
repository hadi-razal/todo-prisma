"use client"

import { todoType } from "@/types/todoType"
import Form from "../ui/Form"
import Input from "../ui/Input"
import Button from "../ui/Button"
import { useState } from "react"
import { BiCheck, BiEdit } from "react-icons/bi"
import { edit } from "@/app/actions/todoActions"


interface TodoProps {
    todo: todoType
}

const EditTodo = ({ todo }: TodoProps) => {

    const [editTodo, setEditTodo] = useState(false)
    const handleEdit = () => {
        if (todo.isCompleted === true) {
            return
        }
        setEditTodo(!editTodo)
    }
    const handleSubmit = () => {
        setEditTodo(false)
    }


    return (
        <div className="flex gap-5 items-center">

            <Button className="" onClick={handleEdit} text={<BiEdit />} actionButton />

            {editTodo && (
                <Form action={edit} onSubmit={handleSubmit} >
                    <Input name="inputId" value={todo.id} type="hidden" />
                    <div className="flex justify-center">
                        <Input type="text" name="newTitle" placeholder="Edit Todoo..." />
                        <Button type="submit" text={<BiCheck />} />
                    </div>
                </Form>
            )}

        </div>
    )
}

export default EditTodo
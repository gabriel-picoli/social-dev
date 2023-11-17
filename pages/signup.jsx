import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

const FormContainer = styled.div`
margin-top: 25px; 
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 15px;
`

const Text = styled.p`
text-align: center;
`

export default function SignupPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const hanldeForm = (event) => {
        event.preventDefault() // ? faz com que o formulario nao atualize a pagina

        console.log({
            firstName,
            lastName,
            user,
            email,
            password
        })
    }

    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>

            <FormContainer>
                <H2>Crie sua conta</H2>

                <Form onSubmit={hanldeForm}>
                    <Input type="text" label="Nome" onChange={({ target }) => { setFirstName(target.value) }} />
                    <Input type="text" label="Sobrenome" onChange={({ target }) => { setLastName(target.value) }} />
                    <Input type="text" label="Usuário" onChange={({ target }) => { setUser(target.value) }} />
                    <Input type="email" label="Email" onChange={({ target }) => { setEmail(target.value) }} />
                    <Input type="password" label="Senha" onChange={({ target }) => { setPassword(target.value) }} />

                    <Button>Cadastrar</Button>
                </Form>

                <Text>
                    Já possui uma conta? <Link href="/login">Faça seu login</Link>

                </Text>

            </FormContainer>
        </ImageWithSpace>
    )
}
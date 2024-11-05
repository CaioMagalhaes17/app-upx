import { Button } from "@kosky/ui";

export function LoginButtons() {
  return (
    <>
      <div className="mr-auto" />
      <div className="flex flex-row gap-5">
        <Button className="btn-primary text-lg">Cadastrar-se</Button>
        <Button className="btn-outline-primary-dark text-lg">Entrar</Button>
      </div>
    </>
  )
}
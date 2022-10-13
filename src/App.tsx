import "./styles/global.css";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { Logo } from "./components/Logo";
import { TextInput } from "./components/TextInput";
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";

export function App() {
  return (
    <div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Demeu's Company
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça Login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-[400px]">
        <label htmlFor="email" className="flex flex-col gap-3 mt-10">
          <Text className="font-semibold">Endereço de E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3 mt-10">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="**************" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2 mt-10">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button className="mt-10">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha</a>
        </Text>
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
  )
}
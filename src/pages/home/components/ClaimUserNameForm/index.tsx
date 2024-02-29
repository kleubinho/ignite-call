import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ClaimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema> // convertendo estrutura acima para estrutura TS

export function ClaimUserNameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size={'sm'}
        prefix="Ignite.com/"
        placeholder="seu-usuário"
        crossOrigin={undefined}
        {...register('username')}
      />
      <Button size={'sm'} type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}

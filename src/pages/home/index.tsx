import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import previewImage from '../../assets/appPreview.png'

import { Container, Preview, Hero } from './styles'
import { ClaimUserNameForm } from './components/ClaimUserNameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUserNameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Caléndario simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}

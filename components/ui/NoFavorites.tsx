import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
        display: "flex",
        flexDirection: "column",
        height: 'calc(100vh - 100px)',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}>
        <Text h1>There are no favorites</Text>
        <Image 
          alt="pokeball"
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg'
          width={250}
          height={250}
          css={{
            opacity: 0.2,
          }}
        />

      </Container>
  )
}


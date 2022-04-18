import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"

export const Navbar = () => {

    const { theme } = useTheme()
    // console.log(theme)

  return (
    // usa style para los componentes propios de html
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray800.value
    }}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
            alt="icono app"
            width={70}
            height={70}
        />
        
        {/* <span>Navbar</span> */}

        <Text color="white" h2>P</Text>
        <Text color="white" h3>okémon</Text>
        
        {/* usa 'css'  para los componentes propiso de NextUI */}
        <Spacer css={{ flex:1 }} />
        
        <Text color="white">Favoritos</Text>
    </div>
  )
}

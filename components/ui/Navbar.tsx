import Image from "next/image"
import NextLink from "next/link"
import { Spacer, Text, Switch, useTheme, Link } from "@nextui-org/react"
import useDarkMode from 'use-dark-mode';

import { SunIcon } from '../../icons/SunIcon';
import { MoonIcon } from '../../icons/MoonIcon';

export const Navbar = () => {

    const { theme } = useTheme()
    // console.log(theme)
    const darkMode = useDarkMode(false);

  return (
    // usa style para los componentes propios de html
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 20px',
        backgroundColor: theme?.colors.gray800.value
    }}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
            alt="icono app"
            width={70}
            height={70}
        />
        
        {/* <span>Navbar</span> */}
        <NextLink href="/" passHref>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>
          </Link>
        </NextLink>
        
        {/* usa 'css'  para los componentes propiso de NextUI */}
        <Spacer css={{ flex:1 }} />

        <Switch
          checked={darkMode.value}
          onChange={() => darkMode.toggle()}
          iconOn={<SunIcon filled   />}
          iconOff={<MoonIcon filled   />}
          color="secondary"
          css={{
            marginRight: '20px',
          }}
        />

      

        {/* <Link href="/favorites" css={{marginRight:'10px'}}> */}
        <Link href="/favorites">
          <Text color="white">Favorites</Text>
        </Link>
    </div>
  )
}

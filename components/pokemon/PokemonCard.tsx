import { FC } from "react"

import { useRouter } from 'next/router';

import { Text, Grid, Card, Row, Link } from '@nextui-org/react';

import { SmallPokemon } from "../../interfaces"

interface Props {
    pokemon: SmallPokemon
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const router = useRouter();

    const handleClick = () => {
        // router.push(`/pokemon/${pokemon.id}`);
        router.push(`/name/${pokemon.name}`); //mejor url con nombre, mas friendly, mejor para los bots

    }

    const { name, id, img } = pokemon
    return (
        
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                <Card hoverable clickable onClick={handleClick}>
                    <Card.Body css={{ p: 1 }}>
                        <Card.Image
                            src={img}
                            alt={name}
                            width="100%"
                            height={140}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify="space-between">
                            <Text transform='capitalize'>{name}</Text>
                            <Text>{id}</Text>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        
       
    )
}

// Native
import { TouchableOpacityProps } from 'react-native'
// Styles
import { Container } from './styles'

import AddButtonSvg from '@assets/addButton.svg'

type Props = TouchableOpacityProps & {}

export function AddButton({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <AddButtonSvg />
    </Container>
  )
}

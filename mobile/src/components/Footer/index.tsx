import { Container, SvgContainer } from './styles'
import { useTheme } from 'styled-components/native'
import FooterSvg from '@assets/footer.svg'
import { AddButton } from '@components/AddButton'
import { EditButton } from '@components/EditButton'

type Props = {
  variant: 'add' | 'edit'
  onPress: () => void
  onEdit?: () => void
  onDelete?: () => void
  hasBackground?: boolean
}

export function Footer({
  variant,
  onPress,
  onEdit,
  onDelete,
  hasBackground = false,
}: Props) {
  const { colors } = useTheme()

  return (
    <Container hasBackground={hasBackground}>
      {variant === 'add' ? (
        <AddButton onPress={onPress} />
      ) : (
        <EditButton onEdit={onEdit} onDelete={onDelete} />
      )}
      {hasBackground && (
        <SvgContainer>
          <FooterSvg />
        </SvgContainer>
      )}
    </Container>
  )
}

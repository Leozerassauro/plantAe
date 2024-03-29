// Native
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
// Components
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Slider } from '@components/Slider'
// Routes
import { AppNavigatorRoutesProps } from '@routes/app.routes'
// Styles
import {
  AddPhotoContent,
  Container,
  Content,
  SliderContent,
  Title,
} from './styles'
// Assets
import AddPhotoSvg from '@assets/addPhoto.svg'

export function NewPlant() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const { colors } = useTheme()

  function handleDashboard() {
    navigation.navigate('dashboard')
  }

  return (
    <Container
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 160 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Header
        title="Adicionar nova planta"
        iconPosition="left"
        iconName="close"
        onPress={handleDashboard}
      />
      <Content>
        <AddPhotoContent>
          <AddPhotoSvg />
          <Title>Adicione uma foto</Title>
        </AddPhotoContent>
        <Input borderColor={colors.green_500} placeholder="NOME DA PLANTA" />
        <SliderContent>
          <Slider
            title="QUANTIDADE DE SOL"
            measurement="h/dia"
            minimumValue={0}
            maximumValue={12}
            minimumTrackTintColor={colors.yellow_500}
            thumbTintColor={colors.yellow_500}
          />
          <Slider
            title="ADUBO"
            measurement="x/mês"
            minimumValue={0}
            maximumValue={31}
            minimumTrackTintColor={colors.orange_700}
            thumbTintColor={colors.orange_700}
          />
          <Slider
            title="ÁGUA"
            measurement="x/semana"
            minimumValue={0}
            maximumValue={7}
            minimumTrackTintColor={colors.blue_500}
            thumbTintColor={colors.blue_500}
          />
        </SliderContent>
      </Content>
      <Footer variant="add" onPress={handleDashboard} />
    </Container>
  )
}

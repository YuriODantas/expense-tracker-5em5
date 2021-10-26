import { useState } from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
  onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
  const [thisCategory, setThisCategory] = useState('');
  const [thisTitle, setThisTitle] = useState('');
  const [thisMonth, setThisMonth] = useState(0);
  const [thisValue, setThisValue] = useState(0);
  const [thisYear, setThisYear] = useState(0);
  const [thisDay, setThisDay] = useState(0);

  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(thisYear, thisMonth, thisDay),
      category: thisCategory,
      title: thisTitle,
      value: thisValue
    }
    onAdd(newItem);
  }

  const handleDate = (value: string) => {
    let year = value.split('-')[0];
    let month = value.split('-')[1];
    let day = value.split('-')[2];
    setThisYear(parseInt(year));
    setThisMonth(parseInt(month) - 1);
    setThisDay(parseInt(day));
  }

  return (
    <C.Container>
      <C.BoxInput>
        <label>Data</label>
        <input type="date" onChange={(e) => handleDate(e.target.value)}/>
      </C.BoxInput>
      <C.BoxInput>
        <label>Categoria</label>
        <select onChange={(e) => setThisCategory(e.target.value)}>
          <option value="food">Alimentação</option>
          <option value="rent">Aluguel</option>
          <option value="salary">Salário</option>
        </select>
      </C.BoxInput>
      <C.BoxInput>
        <label>Título</label>
        <input type="text" onChange={(e) => setThisTitle(e.target.value)}/>
      </C.BoxInput>
      <C.BoxInput>
        <label>Valor</label>
        <input type="text" onChange={(e) => setThisValue(parseFloat(e.target.value))}/>
      </C.BoxInput>
      <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
    </C.Container>
  )
}

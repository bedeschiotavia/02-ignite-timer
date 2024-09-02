import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../..'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I will be working on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Name your task"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Foco no trabalho" />
        <option value="Estudar programação" />
        <option value="Foco projeto freelancer" />
        <option value="Organização pessoal/financeira" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}

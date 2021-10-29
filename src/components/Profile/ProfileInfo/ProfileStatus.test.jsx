import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='TEST_STATUS' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('TEST_STATUS')
  })

  test('after creation span should be displayed', () => {
    const component = create(<ProfileStatus status='TEST_STATUS' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test('after creation span should contains correct status', () => {
    const component = create(<ProfileStatus status='TEST_STATUS' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children[0]).toBe('TEST_STATUS')
  })

  test('after creation input shouldnt be displayed', () => {
    const component = create(<ProfileStatus status='TEST_STATUS' />)
    const root = component.root
    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  })


  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status='TEST_STATUS' />)
    const root = component.root
    const span = root.findByType('span')
    span.props.onDoubleClick()
    const input = root.findByType('input')
    expect(input.props.value).toBe('TEST_STATUS')
  })
})
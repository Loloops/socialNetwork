import classes from './FormsControls.module.css'



const Component = Component => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
      <div>

        <Component { ...props} { ...input} />
      </div>

      { hasError && <span>{meta.error}</span> }
    </div>
  )
}



export const Input = Component('input')
export const Textarea = Component('textarea')
export default function MyInput(props) {
    const {field, form, label, ...rest} = props;

    const {name} = field;

    return (
        <div className="input-container">
            <label>
                <input {...field} {...rest} className="input"

                />
                {form.errors[name] && form.touched[name] &&
                    <div className='input-error'>{form.errors[name]}</div>}
            </label>
        </div>
    )
}

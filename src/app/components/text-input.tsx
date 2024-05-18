import './text-input.scss';

export default function TextInput({
  labelTxt,
}: Readonly<{
  labelTxt: string;
}>) {
  return <div className="form__group field">
    <input type="input" className="form__field" placeholder={labelTxt} name="name" required />
    <label htmlFor="name" className="form__label">{labelTxt}</label>
  </div>;
}

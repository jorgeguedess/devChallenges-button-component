import Head from '../Components/Helper/Head';
import Button from '../Components/Button/Button';
import Footer from '../Components/Footer';

import styles from './Buttons.module.css';

import InputSelect from '../Components/InputSelect';
import InputBox from '../Components/InputBox';

import useForm from '../Hooks/useForm';

const Buttons = () => {
  const variant = useForm();
  const disabled = useForm();
  const shadow = useForm();
  const color = useForm();
  const size = useForm();

  return (
    <main className={styles.Buttons}>
      <Head title="Buttons" description="Page buttons" />
      <h1 className="title">Buttons</h1>
      <section className={styles.menuButtons}>
        <Button classGrid="column_2" />
        <Button active classGrid="column_2" />
        <Button variant="outline" classGrid="column_2" />
        <Button variant="outline" active classGrid="column_2" />
        <Button variant="text" disabledShadow classGrid="column_2" />
        <Button variant="text" active classGrid="column_2" />
        <Button disabledShadow color="primary" classGrid="column_4" />
        <Button text="Disabled" disabled classGrid="column_2" />
        <Button text="Disabled" variant="text" disabled classGrid="column_2" />
        <Button
          startIcon="local_grocery_store"
          color="primary"
          classGrid="column_2"
        />
        <Button
          endIcon="local_grocery_store"
          color="primary"
          classGrid="column_2"
        />
        <Button size="sm" color="primary" visibleText={true} />
        <Button size="md" color="primary" visibleText={true} />
        <Button
          size="lg"
          color="primary"
          visibleText={true}
          classGrid="column_2"
        />
        <Button color="default" visibleText={true} />
        <Button color="primary" visibleText={true} />
        <Button text="Secondary" color="secondary" visibleText={true} />
        <Button text="Danger" color="danger" visibleText={true} />
        <Button active />
        <Button color="primary" visibleText={false} active />
        <Button color="secondary" visibleText={false} active />
        <Button color="danger" visibleText={false} active />
      </section>
      <p className="ref">
        Icons:{' '}
        <a
          href="https://material.io/resources/icons/?style=round"
          target="_blank"
        >
          https://material.io/resources/icons/?style=round
        </a>
      </p>

      <section className={styles.customizeButton}>
        <h2 className="title">Customize</h2>
        <div className={styles.buttonGenerate}>
          <Button
            hiddenTag
            variant={variant.value}
            disabledShadow={!shadow.box}
            disabled={disabled.box}
            color={color.value}
            size={size.value}
          />
        </div>
        <div className={styles.containerInputs}>
          <InputSelect label="variant" {...variant} type="variants" />
          <div className={styles.input_group}>
            <InputBox label="disabled" {...disabled} />
            <InputBox label="shadow" {...shadow} />
          </div>
          <InputSelect label="color" {...color} type="colors" />
          <InputSelect label="size" {...size} type="sizes" />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Buttons;

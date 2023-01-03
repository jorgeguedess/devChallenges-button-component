import Head from "../Components/Helper/Head";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer";

import styles from "../pages/Buttons.module.css";

const Buttons = () => {
  return (
    <main className={styles.Buttons}>
      <Head title="Buttons" />
      <h1 className={styles.title}>Buttons</h1>
      <section className={styles.menuButtons}>
        <Button classGrid="column_2" />
        <Button active classGrid="column_2" />
        <Button variant="outline" classGrid="column_2" />
        <Button variant="outline" active classGrid="column_2" />
        <Button variant="text" classGrid="column_2" />
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
        <Button size="sm" color="primary" visibleText="true" />
        <Button size="md" color="primary" visibleText="true" />
        <Button
          size="lg"
          color="primary"
          visibleText="true"
          classGrid="column_2"
        />
        <Button color="default" visibleText="true" />
        <Button color="primary" visibleText="true" />
        <Button text="Secondary" color="secondary" visibleText="true" />
        <Button text="Danger" color="danger" visibleText="true" />
        <Button active />
        <Button color="primary" visibleText="false" active />
        <Button color="secondary" visibleText="false" active />
        <Button color="danger" visibleText="false" active />
      </section>
      <p className={styles.ref}>
        Icons:{" "}
        <a
          href="https://material.io/resources/icons/?style=round"
          target="_blank"
        >
          https://material.io/resources/icons/?style=round
        </a>
      </p>
      <Footer />
    </main>
  );
};

export default Buttons;

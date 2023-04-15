import styles from "../main/pageHeader.module.css";

//poner todos los estilos en pageHeader.css para todos los elementos. Usar styled components
export default function PageHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.playOnHover}></div>
      <div>
        <div>Hi, my name is Ana.</div>
        <div>
          I'm a creative frontend software developer from Barranquilla,
          Colombia.
        </div>
      </div>
    </div>
  );
}

import * as React from 'react';
import { Textarea } from '@base-ui-components/react/textarea';
import styles from './index.module.css';

export default function ExampleTextarea() {
  return <Textarea placeholder="Name" className={styles.Textarea} rows={4} />;
}

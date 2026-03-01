import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

import validationForm from '../../validator/validationForm';

function DynamicForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({mode: 'onChange'});

  const selectInput = watch('firstField');
  const isFirstFieldValid = selectInput && !errors.firstField;

  const { firstField, secondField } = validationForm;

  return (
    <div className={styles.dynamicForm}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstField">First Field</label>
        <input
          type="text"
          placeholder="First Field"
          name="firstField"
          id="firstField"
          {...register('firstField', firstField)}
        />
        {errors.firstField && <span className={styles.error}>{errors.firstField.message}</span>}

        {isFirstFieldValid  && (
          <>
            <label htmlFor="secondField">Second Field</label>
            <input
              type="text"
              placeholder="Second Field"
              name="secondField"
              id="secondField"
              {...register('secondField', secondField)}
            />
            {errors.secondField && <span className={styles.error}>{errors.secondField.message}</span>}
          </>
        )}

        <input
          type="submit"
          id="submitBtn"
          className={styles.submitBtn}
          value="Submit"
          name="submit"
          {...register('submit')}
          disabled={!isValid || isSubmitting}
        />
      </form>
    </div>
  );
}

export default DynamicForm;

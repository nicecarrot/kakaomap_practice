import { ChangeEvent, FormEvent, useState } from "react";
import { SELECT_BRAND_CONTENTS, SELECT_EVENT_CONTENTS } from "../constant";
import styles from "../../styles/header/_searchForm.module.scss";

const SEARCH = <i className="fa-solid fa-magnifying-glass"></i>;

interface SearchProps {
  brand: string;
  event: string;
  name: string;
}

const SearchForm = () => {
  const [search, setSearch] = useState<SearchProps>({
    brand: "",
    event: "",
    name: "",
  });
  const { brand, event, name } = search;

  // Event
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, name: e.target.value });
  };
  const onClickSubmitButton = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(search);
    // axios get
  };

  return (
    <form className={styles.searchFormWrapper}>
      <div className={styles.selectBrand}>
        <select name="brand" onChange={onChangeSelect} value={brand}>
          {SELECT_BRAND_CONTENTS.map((content) => {
            const { value, brand } = content;
            return (
              <option key={brand} value={value}>
                {brand}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.selectEvent}>
        <select name="event" onChange={onChangeSelect} value={event}>
          {SELECT_EVENT_CONTENTS.map((content, idx) => {
            const { value, event } = content;
            return (
              <option key={idx} value={value}>
                {event}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.inputName}>
        <input
          type="text"
          placeholder=" "
          value={name}
          onChange={onChangeName}
        />
        <button
          type="submit"
          className={styles.searchBtn}
          onClick={onClickSubmitButton}
        >
          {SEARCH}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;

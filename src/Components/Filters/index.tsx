import useProducts from "Hooks/useProducts";
import * as S from "./styles";

const Filters = () => {
  const { categories, selectedCategory, selectCategory } = useProducts();

  return (
    <S.Wrapper>
      <S.FilterTitle>Categories</S.FilterTitle>

      <S.Categories>
        {categories.map((category) => (
          <S.Category key={category} onClick={() => selectCategory(category)}>
            <input
              aria-label={category}
              type="checkbox"
              checked={selectedCategory === category}
              title={category}
            />
            <span>{category}</span>
          </S.Category>
        ))}
      </S.Categories>
    </S.Wrapper>
  );
};

export default Filters;

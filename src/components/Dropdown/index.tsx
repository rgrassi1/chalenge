import React, { useState, ChangeEvent } from 'react';
import { FiSliders } from 'react-icons/fi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useApp } from '../../hooks/app';
import IOrder from '../../types/order';
import { Container, DropDownButton } from './styles';

const icons = {
  asc: <MdKeyboardArrowUp size={16} />,
  desc: <MdKeyboardArrowDown size={16} />,
};

interface IDropDownProps {
  order: IOrder;
  setOrder(order: IOrder): void;
}

const DropDown: React.FC<IDropDownProps> = ({ order, setOrder }) => {
  const [visible, setVisible] = useState(false);

  const { authors, filterByAuthorId } = useApp();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleAuthorChange(event: ChangeEvent<HTMLSelectElement>) {
    filterByAuthorId(Number(event.target.value));
  }

  function handleOrderChange() {
    const type = order.type === 'asc' ? 'desc' : 'asc';
    setOrder({ ...order, type });
    // sortByOrder({ type });
  }

  return (
    <React.Fragment>
      <DropDownButton type="button" onClick={handleToggleVisible}>
        <FiSliders size={20} />
      </DropDownButton>
      <Container visible={visible}>
        <p>Author</p>
        <select onChange={handleAuthorChange}>
          <option value={0}>Everyone</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleOrderChange}>
          <span>
            {icons[order.type || 'desc']}
            order by date
          </span>
        </button>
      </Container>
    </React.Fragment>
  );
};

export default DropDown;

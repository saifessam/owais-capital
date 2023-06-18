import Button from '@/components/button';
import SearchIcon from '@/public/assets/svgs/search.svg';
import './styles.css';

type Props = {
	name: string;
	placeholder: string;
};

export default function SearchInput({ name, placeholder }: Props) {
	return (
		<form className="search-input">
			<input type="text" name={name} placeholder={placeholder} />
			<Button type='submit' content={<SearchIcon />} />
		</form>
	);
}

import Forms from '@/public/assets/svgs/forms.svg';
import DropdownInput from '../inputs/dropdown';
import SearchInput from '../inputs/search';
import './styles.css';

export default function Search() {
	return (
		<div className='search'>
			<div className="title">
				<div className="icon"><Forms /></div>
				<div className="labels">
					<span>Forms</span>
					<small>All the compulsory forms are available here</small>
				</div>
			</div>
			<div className="inputs">
				<SearchInput name='search' placeholder='Search' />
				<DropdownInput name='sort' placeholder='Sort by' options={["ID", "Title", "Date"]} />
			</div>
		</div>
	);
}

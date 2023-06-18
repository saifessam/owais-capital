import BlobSVG from '@/public/assets/svgs/blob.svg';
import './styles.css';

export default function Blobs() {
	return (
		<div id='blobs'>
			<BlobSVG id="top" />
			<BlobSVG id="left" />
			<BlobSVG id="right" />
		</div>
	);
}

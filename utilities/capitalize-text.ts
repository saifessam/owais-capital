export default function capitalizeText(text: string) {
	function capitalize(): string {
		return text.charAt(0).toUpperCase().concat(text.slice(1).toLowerCase());
	}

	function toTitleCase(): string {
		return text.split(" ").map((word) => word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase())).join(" ");
	}

	return { capitalize, toTitleCase };
}
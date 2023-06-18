import FormsJSON from '@/public/data/forms.json';
import { NextResponse } from 'next/server';

export async function getForms() {
	return NextResponse.json(FormsJSON).json();
}

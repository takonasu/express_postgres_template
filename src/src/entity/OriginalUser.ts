import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OriginalUser {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('text')
	appleId: string;
}

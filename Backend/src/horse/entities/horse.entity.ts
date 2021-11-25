import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Horse')
export class Horse extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  horse_number: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'tinyint' })
  age: number;

  @Column({ type: 'tinyint' })
  sex: number;

  @Column({ type: 'char', length: 4 })
  nationality: string;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'float' })
  weight: number;
}

import {categories} from "../data/categories.ts";
import {Category} from "../types";


export const Form = () => {

    return (
        <>
            <form className={'space-y-5 bg-white shadow p-10 rounded-lg'}>
                <div className={'grid grid-cols-1 gap-3'}>
                    <label htmlFor={'category'} className={'font-bold'}>Categoría:</label>
                    <select id="category" className={'border border-slate-300 p-2 rounded-lg w-full bg-white'}>
                        {categories.map((category: Category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className={'grid grid-cols-1 gap-3'}>
                    <label htmlFor={'activity'} className={'font-bold'}>Actividad:</label>
                    <input type="text"
                           id={'activity'}
                           className={'border border-slate-300 p-2 rounded-lg w-full bg-white'}
                           placeholder={'Ej. comida, Jugo de Naranja, Ensalada, Ejercicios, etc.'}/>
                </div>
                <div className={'grid grid-cols-1 gap-3'}>
                    <label htmlFor={'calories'} className={'font-bold'}>Calorías:</label>
                    <input type="number"
                           id={'calories'}
                           className={'border border-slate-300 p-2 rounded-lg w-full bg-white'}
                           placeholder={'Ej. 300 o 500'}/>
                </div>
                <input type="submit"
                       value={'Guardar Comida o guardar ejercicio'}
                       className={'bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer'}/>
            </form>
        </>
    )
}

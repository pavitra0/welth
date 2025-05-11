import { getUserAccount } from '@/actions/dashboard'
import { defaultCategories } from '@/data/categories'
import React from 'react'
import AddTransactionForm from './_components/transaction-form'
import { getTransaaction } from '@/actions/transaction'

async function AddTransactionPage({searchParams}) {
const accounts = await getUserAccount()

const editId = await searchParams?.edit


let initialData = null 
if(editId){
  const transaction = await getTransaaction(editId)
  initialData = transaction
}

  return (
    <div className='max-w-3xl mx-auto px-5'>
      <h1 className='text-5xl gredient-title mb-8'>{editId?'Edit':'Add'} Transaction</h1>

      <AddTransactionForm accounts={accounts} categories={defaultCategories}
      editMode={!!editId}
      initialData={initialData}
      />

    </div>
  )
}

export default AddTransactionPage
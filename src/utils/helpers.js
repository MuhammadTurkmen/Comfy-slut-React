export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number)
    return newNumber 
} 

export const getUniqueValues = () => {}

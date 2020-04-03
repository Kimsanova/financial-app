import FinancialData from "./financial-data";
import TermData from "./term-data";
import Currencies from "./currency-data";

export default class DataService {

    getTerm() {
        const title = TermData.map(value => value.title)
        return title
    }

    getCurrency() {
        const currency = Currencies.map(value => ({
            value: value.value,
            label: value.label
        }))
        return currency
    }

    getIncomeCategory() {
        const incomeCategory = FinancialData[0].income.map(value => {
            const category = value.category;
            const amount = category.map(value1 => (value1.amount))
                    .reduce((acc, price) => acc + price)

            return { id: (value.id - 1), amount, value: value.name, }
        })
        return incomeCategory
    }

    getSpendingCategory() {
        const spendingCategory = FinancialData[1].spending.map(value => {
            const category = value.category;
            const amount = category.map(value1 => value1.amount)
                .reduce((acc, price) => acc + price )
            return { id: (value.id - 1), amount, value: value.name}
        })
        return spendingCategory
    }

    getIncomeTotalAmount() {
        const incomeCategory = FinancialData[0].income.map(value => {
            const category = value.category;
            const amount = category.map(value1 => (value1.amount))
                .reduce((acc, price) => acc + price)
            return amount
        })

        const totalAmount = incomeCategory.reduce((acc, price) => acc + price, 0)
        return totalAmount
    }

    getSpendingTotalAmount() {
        const spendingCategory = FinancialData[1].spending.map(value => {
            const category = value.category;
            const amount = category.map(value1 => value1.amount)
                .reduce((acc, price) => acc + price)
            return amount
        })

        const totalAmount = spendingCategory.reduce((acc, price) => acc + price, 0)
        return totalAmount
    }



    getIncomeCategoryId(id) {
        const income = FinancialData[0].income
        const category = income[id].category
        return {
            name: income[id].name,
            category: category
        }
    }

    getSpendingCategoryId(id) {
        const spending = FinancialData[1].spending
        const category = spending[id].category
        return {
            name: spending[id].name,
            category: category
        }
    }

    getIncomeCategoryIdAmount(id) {
        const income = FinancialData[0].income
        const category = income[id].category
        const total = category.map(value => (value.amount))
                                .reduce( (acc, price ) => acc + price, 0)
        return total
    }

    getSpendingCategoryIdAmount(id) {
        const spending = FinancialData[1].spending
        const category = spending[id].category
        const total = category.map(value => value.amount)
                                .reduce((acc, price) => acc + price, 0)
        return total
    }

}
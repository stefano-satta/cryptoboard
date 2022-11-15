const useCurrentDate = () => {
    const date = new Date();

    const getCurrentYear = () => {
        return date.getFullYear();
    }

    return {date, getCurrentYear}
}

export default useCurrentDate;
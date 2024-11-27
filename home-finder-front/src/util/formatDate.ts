export function formatDate(createdDate:number[]):string{
    
      const date = new Date(
        createdDate[0],
        createdDate[1] - 1,
        createdDate[2],
        createdDate[3],
        createdDate[4],
        createdDate[5],
      );

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}
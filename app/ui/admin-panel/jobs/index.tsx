const Index = ()=>{
    const table = [
      {
        jobId: "sfsadgsgagas",
        input: "fgfasdgafgsffa",
        createdAt: "sdfgsgsdfg",
        status: "gsfgasg",
        percentage: "sfgsfag"
      },
      {
        jobId: "sfsadgsgagas",
        input: "fgfasdgafgsffa",
        createdAt: "sdfgsgsdfg",
        status: "gsfgasg",
        percentage: "sfgsfag"
      },
      {
        jobId: "sfsadgsgagas",
        input: "fgfasdgafgsffa",
        createdAt: "sdfgsgsdfg",
        status: "gsfgasg",
        percentage: "sfgsfag"
      },
      {
        jobId: "sfsadgsgagas",
        input: "fgfasdgafgsffa",
        createdAt: "sdfgsgsdfg",
        status: "gsfgasg",
        percentage: "sfgsfag"
      }
    ];
  
    const Tr = ({item}:any)=>{
      const tr = (
        <>
          <tr>
            <td>{item.jobId}</td>
            <td>{item.input}</td>
            <td>{item.createdAt}</td>
            <td>{item.status}</td>
            <td>{item.percentage}</td>
          </tr>
        </>
      );
      return tr;
    }
  
    const design = (
      <>
        <h1 className="mb-4 text-lg text-white">All Jobs</h1>
        <table className="table table-bordered text-white">
          <thead>
            <tr>
              {
                Object.keys(table[0]).map((key,index)=>{
                  return <th key={index}>{key}</th>;
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              table.map((item,index)=>{
                return <Tr key={index} item={item} />
              })
            }
          </tbody>
        </table>
      </>
    );
    return design;
  }
  
  export default Index;
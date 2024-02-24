import { useState, useEffect } from "react";
import "./memo.css";
const Memos = ({ state }) => {
  const [visitors, setvisitors] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const visitors = await contract.getVisitor();
      setvisitors(visitors);
    };
    contract && memosMessage();
  }, [contract]);
  const obj = visitors;

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px" }}><big>Records</big></p>
      <table>
        <thead>
          <tr>
            <td style={{width:"10%",backgroundColor:"#4ca8ff"}}><big>Name</big></td>
            <td style={{width:"15%",backgroundColor:"#4ca8ff"}}><big>ContactDetails</big></td>
            <td style={{width:"15%",backgroundColor:"#4ca8ff"}}><big>Purpose</big></td>
            <td style={{width:"30%",backgroundColor:"#4ca8ff"}}><big>Time-stamp</big></td>
            <td style={{width:"30%",backgroundColor:"#4ca8ff"}}><big>WalletAddress</big></td>
          </tr>
        </thead>
      </table>
      {visitors.toReversed().map((memo) => {
        const timestamp = BigInt(memo.timestamp);
        const dateobj = new Date(Number(timestamp * 1000n)).toString();
        return (
          <div
          key={Math.random()}>
           <div>
            <table>
              <tbody>
              <tr>
                <td id="nametable">{memo.name}</td>
                <td id="detail">{memo.contactDetails}</td>
                <td id="pur">{memo.purpose}</td>
                <td id="timestamp">{dateobj}</td>
                <td id="Address">{memo.walletAddress}</td>
              </tr>
              </tbody>
            </table>
           </div>
          </div>
        );
      })}
    </>
  );
};
export default Memos;

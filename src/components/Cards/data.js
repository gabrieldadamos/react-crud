import React, {
  useState,
  useEffect
} from "react";
import Cards from "../Cards";
import axios from "axios";

export default function Data() {
  const [data, setData] = useState([]);

  const apiUrl = 'http://3.91.55.132:3333/developers';

  const callBackRemove = (data) => {
    axiosRun('remove', data);
  }

  const callBackCreate = (data) => {
    axiosRun('create', data);
  }

  useEffect(() => {
    axiosRun();
  }, []);

  const axiosRun = (type, data) => {
    switch (type) {
      case 'remove':
        axios.delete(apiUrl + '/' + data.id).then((res) => {
          axiosRun();
        });
        break;
      case 'create':
        if (data.edit === 1) {
          axiosRun('edit', data);
          break;
        }
        axios.post(apiUrl, data).then((res) => {
          axiosRun();
        });
        break;
      case 'edit':
        axios.put(apiUrl + '/' + data.id, data).then((res) => {
          axiosRun();
        });
        break;
      default:
        axios.get(apiUrl).then((res) => {
          setData(res.data);
        });
        break;
    }
  }

  return <Cards data = {
    data
  }
  callBackRemove = {
    (data) => callBackRemove(data)
  }
  callBackCreate = {
    (data) => callBackCreate(data)
  }
  />;
}
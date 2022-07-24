import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import { FunctionComponent } from "react";
import { useAppSelector } from "../../../store";

interface IwalletDropDownProps {
  isClearable: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  onChange: (option: unknown | null, actionMeta: any) => void;
  onCreateOption: (input: string) => void;
  options: unknown;
  value: string;
}

export default function walletDropDown(props: IwalletDropDownProps) {
  const { userWallets, dataFetched, error, status } = useAppSelector(
    (state) => state.userWallets
  );

  // get options from store
  const options = userWallets.map((wallet) => ({
    option: wallet.string,
    value: wallet.string,
  }));

  const handleCreate = (iputValue: string): void => {
    iputValue;
    // check if it is in valid format with web3 and send created value to server to check duplicate & etc
    // if all ok add to options
  };
  return (
    <CreatableSelect
      isClearable
      isLoading={isLoading}
      onChange={this.handleChange}
      onCreateOption={handleCreate}
      options={options}
      value={value}
    />
  );
}

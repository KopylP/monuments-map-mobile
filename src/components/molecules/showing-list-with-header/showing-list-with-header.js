import React from "react";
import OutgoingHeader from "../../atoms/outgoing-header";
import ShowingListContainer from "../../atoms/showing-list-container";

export default function ShowingListWithHeader({ show, children }) {
  return (
    <>
      <OutgoingHeader show={show} />
      <ShowingListContainer show={show} children={children} />
    </>
  );
}

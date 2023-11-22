import * as React from "react";

import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import { Photo } from "@mui/icons-material";
import { Field } from "./Field";
import { SectionHeading, Sections } from "./Section";
import { TextInput } from "../../components/Fields/Input";
import { DatePicker } from "../../components/Fields/DatePicker";
import { Dropdown } from "../../components/Fields/Dropdown";
import { FileInput } from "../../components/Fields/FileInput";

export default function CreateUserModal({ open, setOpen, onAddUser, id }) {
  const [data, setData] = React.useState({ id });
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => setOpen(false);

  const updateData = (e) => {
    if (e.target.name)
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
  };

  const addUserToStore = () => {
    setLoading(true);
    setTimeout(() => {
      onAddUser(data);
      handleClose();
    }, 2000);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            height: "85vh",
            overflow: "scroll",
            background:
              "linear-gradient(81deg, rgba(73,38,131,1) 0%, rgba(30,38,158,1) 100%)",
            border: "2px solid #000",
            padding: "50px",
          }}>
          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <SectionHeading>Basic Information</SectionHeading>
              <div
                style={{
                  display: "flex",
                  margin: 10,
                  alignItems: "center",
                }}>
                <div
                  style={{
                    display: "flex",
                    height: "300px",
                    width: "250px",
                    overflow: "hidden",
                    backgroundColor: "rgb(21,21,21)",
                  }}>
                  {data?.avatar ? (
                    <img
                      src={data?.avatar}
                      alt="Avatar"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}>
                      <Photo
                        style={{
                          fill: "white",
                        }}
                      />
                      <p
                        style={{
                          color: "white",
                        }}>
                        Your Profile Picture
                      </p>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    marginTop: "50px",
                  }}>
                  <FileInput
                    accept="image/*"
                    id="select-image"
                    style={{
                      marginLeft: "50px",
                    }}
                    onChange={(e) =>
                      updateData({
                        target: {
                          name: "avatar",
                          value: URL.createObjectURL(e.target.files[0]),
                        },
                      })
                    }
                  />
                </div>
              </div>
              <Sections>
                <Field>
                  <TextInput
                    name="fullName"
                    placeholder="Full Name"
                    onChange={updateData}
                  />
                </Field>
                <Field>
                  <TextInput
                    name="mobNo"
                    placeholder="Mobile number"
                    onChange={updateData}
                  />
                </Field>
                <Field>
                  {" "}
                  <TextInput
                    name="email"
                    placeholder="Email"
                    onChange={updateData}
                  />
                </Field>
                <Field>
                  <DatePicker
                    name="dob"
                    placeholder="Date of birth"
                    onChange={updateData}
                  />
                </Field>
                <Field>
                  <TextInput
                    name="position"
                    placeholder="position"
                    onChange={updateData}
                  />
                </Field>
                <Field>
                  <Dropdown
                    onChange={updateData}
                    name="department"
                    label="Department"
                    options={["CSE", "DSE", "IT", "Sales"]}
                  />
                </Field>
                <Field>
                  <Dropdown
                    options={["Yes", "No"]}
                    onChange={updateData}
                    label="Crm User"
                    name="crmUser"
                  />
                </Field>
                <Field>
                  <Dropdown
                    options={["Consultant", "Developer", "Analyst", "Manager"]}
                    onChange={updateData}
                    name="role"
                    label="Role"
                  />
                </Field>
                <Field>
                  <Dropdown
                    options={["1", "2", "3", "4"]}
                    name="assignedCallerId"
                    onChange={updateData}
                    label="Assigned Caller ID"
                  />
                </Field>
                <Field>
                  <Dropdown
                    options={[
                      "India",
                      "Srilanka",
                      "Australia",
                      "USA",
                      "Japan",
                      "China",
                      "Russia",
                    ]}
                    onChange={updateData}
                    name="country"
                    label="Country"
                  />
                </Field>
                <Field>
                  <Dropdown
                    options={["MH", "MP", "GJ", "CA", "TN", "AP"]}
                    name="state"
                    onChange={updateData}
                    label="State"
                  />
                </Field>
                <Field>
                  <Dropdown
                    options={[
                      "Bhopal",
                      "Indore",
                      "Pune",
                      "Mumbai",
                      "Kolkata",
                      "NewYork",
                      "Osaka",
                    ]}
                    name="city"
                    onChange={updateData}
                    label="City"
                  />
                </Field>
                <Field>
                  <TextInput
                    name="address"
                    placeholder="Address"
                    onChange={updateData}
                  />
                </Field>
              </Sections>
              <div>
                <SectionHeading>Basic Salary Information</SectionHeading>
                <Sections>
                  <Field>
                    <Dropdown
                      options={["Bank", "Cash", "Cheque", "DD"]}
                      onChange={updateData}
                      name="salaryBasis"
                      label="Salary basis"
                    />
                  </Field>
                  <Field>
                    <Dropdown
                      options={["10000/-", "20000/-", "50000/-", "100000/-"]}
                      onChange={updateData}
                      name="salaryAmount"
                      label="Salary Amount (per month)"
                    />
                  </Field>
                  <Field>
                    <Dropdown
                      options={["Bank", "Cash", "Cheque", "DD"]}
                      name="paymentType"
                      onChange={updateData}
                      label="Payment Type"
                    />
                  </Field>
                </Sections>
              </div>
              <div>
                <SectionHeading>PR Information</SectionHeading>
                <Sections>
                  <Field>
                    <Dropdown
                      options={["yes", "no"]}
                      name="pfContribution"
                      onChange={updateData}
                      label="PF contribution"
                    />
                  </Field>
                  <Field>
                    <TextInput
                      name="pfNumber"
                      placeholder="PF Number"
                      onChange={updateData}
                    />
                  </Field>
                  <Field>
                    <Dropdown
                      options={["10%", "30%", "40%"]}
                      name="employeePfRate"
                      onChange={updateData}
                      label="Employee PF rate"
                    />
                  </Field>
                </Sections>
                <Sections>
                  <Field>
                    <Dropdown
                      options={["10%", "20%", "30%"]}
                      name="pfAdditionalRate"
                      onChange={updateData}
                      label="Additional Rate"
                    />
                  </Field>
                  <Field>
                    <TextInput
                      name="pfTotalRate"
                      placeholder="Total Rate in%"
                      onChange={updateData}
                    />
                  </Field>
                </Sections>
                <Sections heading={"ESIC information"}>
                  <Field>
                    <Dropdown
                      options={["Yes", "No"]}
                      onChange={updateData}
                      name="esicContribution"
                      label="ESIC Contribution"
                    />
                  </Field>
                  <Field>
                    <TextInput
                      name="esicNo"
                      placeholder="ESIC No."
                      onChange={updateData}
                    />
                  </Field>
                  <Field>
                    <Dropdown
                      options={["yes", "no"]}
                      name="esicEmployeeRate"
                      onChange={updateData}
                      label="Employee ESIC Rate"
                    />
                  </Field>

                  <Field>
                    <Dropdown
                      options={["yes", "no"]}
                      name="esicAdditionalRate"
                      onChange={updateData}
                      label="Additional Rate"
                    />
                  </Field>
                  <Field>
                    <TextInput
                      name="esicTotalRate"
                      placeholder="Total Rate in%"
                      onChange={updateData}
                    />
                  </Field>
                </Sections>
              </div>
              <button className="app-btn" onClick={addUserToStore}>
                Submit
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

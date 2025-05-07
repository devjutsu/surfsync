import { useState } from 'react';

export default function TrackersConfig() {
  const [devices, setDevices] = useState([
    { name: 'Naish Motion', identifier: '861261029827785' },
    { name: 'North Atmos', identifier: '861261029827785' },
  ]);

  const [newDevice, setNewDevice] = useState({ name: '', identifier: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDevice({ ...newDevice, [e.target.name]: e.target.value });
  };

  const handleAddDevice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDevices([...devices, newDevice]);
    setNewDevice({ name: '', identifier: '' });
  };

  return (
    <div className="card bg-neutral shadow-md text-neutral-content">
      <div className="card-body">
        <h2 className="card-title text-white">Trackers</h2>


        <ul className="space-y-2 opacity-80">
          {devices.map((device, index) => (
            <li
              key={index}
              className="rounded-lg p-2 bg-base-200 text-base-content"
            >
              <div className="font-bold">{device.name}</div>
              <div className="text-sm opacity-70">{device.identifier}</div>
            </li>
          ))}
        </ul>

        <div className="divider">Add New Tracker</div>

        <form onSubmit={handleAddDevice} className="">
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-primary-content">Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Device name"
                className="input input-bordered bg-base-100 my-2"
                value={newDevice.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label className="form-control">
            <span
              className="label-text text-primary-content py-2"
              style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
            >
              Identifier
            </span>
            <div
              className="tooltip"
              data-tip="IMEI, serial number or other id. It has to match the identifier device reports to the server."
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            >
              <span
                className="material-symbols-rounded cursor-help"
                style={{ verticalAlign: 'middle' }}
              >
                info
              </span>{' '}
            </div>
          </label>

          <input
            type="text"
            name="identifier"
            placeholder="IMEI or serial number"
            className="input input-bordered bg-base-100 my-2"
            value={newDevice.identifier}
            onChange={handleChange}
            required
          />

          <div className="flex flex-row justify-center py-2">
            <button type="submit" className="btn btn-secondary">
              Add Device
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

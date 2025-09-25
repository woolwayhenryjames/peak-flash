import { useState } from 'react';

// Dynamic JSON Input Component
export function DynamicJSONInput({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: Record<string, unknown>;
}) {
  const defaultJoinRequirement = {
    'Required Tags': ['InfinityGround', 'Web3IDE', 'AIDevelopment'],
    'Content Requirements':
      '- Must include a brief overview of InfinityGround and its features.\n- Highlight the benefits of using Web3IDE for AI development.\n- Include a call-to-action encouraging users to try out InfinityGround.',
  };

  // Add stable keys to prevent focus issues
  const [jsonData, setJsonData] = useState<
    Record<string, { id: string; value: unknown }>
  >(() => {
    const initialData = defaultValue || defaultJoinRequirement;
    const result: Record<string, { id: string; value: unknown }> = {};
    Object.entries(initialData).forEach(([key, value], index) => {
      result[key] = { id: `field-${Date.now()}-${index}`, value };
    });
    return result;
  });
  const [newFieldKey, setNewFieldKey] = useState('');

  const addNewField = () => {
    if (newFieldKey && !jsonData[newFieldKey]) {
      setJsonData((prev) => ({
        ...prev,
        [newFieldKey]: {
          id: `field-${Date.now()}-${Object.keys(prev).length}`,
          value: '',
        },
      }));
      setNewFieldKey('');
    }
  };

  const removeField = (key: string) => {
    setJsonData((prev) => {
      const newData = { ...prev };
      delete newData[key];
      return newData;
    });
  };

  const updateFieldValue = (key: string, value: unknown) => {
    setJsonData((prev) => ({
      ...prev,
      [key]: { ...prev[key], value },
    }));
  };

  const updateKey = (oldKey: string, newKey: string) => {
    if (newKey && newKey !== oldKey && !jsonData[newKey]) {
      setJsonData((prev) => {
        const newData = { ...prev };
        newData[newKey] = prev[oldKey];
        delete newData[oldKey];
        return newData;
      });
    }
  };

  const renderValueInput = (
    key: string,
    fieldData: { id: string; value: unknown }
  ) => {
    const value = fieldData.value;
    if (Array.isArray(value)) {
      return (
        <div className="space-y-2">
          {value.map((item, index) => (
            <div className="flex gap-2" key={`${fieldData.id}-item-${index}`}>
              <input
                className="flex-1 rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
                onChange={(e) => {
                  const newArray = [...value];
                  newArray[index] = e.target.value;
                  updateFieldValue(key, newArray);
                }}
                placeholder={`Item ${index + 1}`}
                type="text"
                value={item as string}
              />
              <button
                className="rounded-md bg-red-600 px-3 py-2 text-white text-xs hover:bg-red-700"
                onClick={() => {
                  const newArray = value.filter((_, i) => i !== index);
                  updateFieldValue(key, newArray);
                }}
                type="button"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="rounded-md bg-green-600 px-3 py-1 text-white text-xs hover:bg-green-700"
            onClick={() => {
              updateFieldValue(key, [...value, '']);
            }}
            type="button"
          >
            Add Item
          </button>
        </div>
      );
    }

    if (typeof value === 'string' && value.includes('\n')) {
      return (
        <textarea
          className="w-full rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
          onChange={(e) => updateFieldValue(key, e.target.value)}
          rows={4}
          value={value}
        />
      );
    }

    return (
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
          onChange={(e) => updateFieldValue(key, e.target.value)}
          type="text"
          value={value as string}
        />
        <button
          className="rounded-md bg-blue-600 px-3 py-2 text-white text-xs hover:bg-blue-700"
          onClick={() => {
            updateFieldValue(key, [value as string]);
          }}
          type="button"
        >
          Convert to Array
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {Object.entries(jsonData).map(([key, fieldData]) => (
          <div
            className="rounded-lg border border-gray-600 p-4"
            key={fieldData.id}
          >
            <div className="mb-3 flex items-center gap-2">
              <input
                className="flex-1 rounded-md border-gray-600 bg-gray-700 px-3 py-2 font-medium text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
                defaultValue={key}
                onBlur={(e) => updateKey(key, e.target.value)}
                placeholder="Field name"
                type="text"
              />
              <button
                className="rounded-md bg-red-600 px-3 py-2 text-white text-xs hover:bg-red-700"
                onClick={() => removeField(key)}
                type="button"
              >
                Remove Field
              </button>
            </div>
            {renderValueInput(key, fieldData)}
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-gray-500 border-dashed p-4">
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-md border-gray-600 bg-gray-700 px-3 py-2 text-sm text-white focus:border-indigo-400 focus:ring-indigo-400"
            onChange={(e) => setNewFieldKey(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addNewField();
              }
            }}
            placeholder="New field name"
            type="text"
            value={newFieldKey}
          />
          <button
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
            onClick={addNewField}
            type="button"
          >
            Add Field
          </button>
        </div>
      </div>

      {/* Hidden input that contains the JSON data - strip IDs before serializing */}
      <input
        name={name}
        type="hidden"
        value={JSON.stringify(
          Object.fromEntries(
            Object.entries(jsonData).map(([key, fieldData]) => [
              key,
              fieldData.value,
            ])
          )
        )}
      />
    </div>
  );
}

import { getConditions, encryptVote, decryptVote } from '../src/index';

describe('getConditions', () => {
  test('returns the correct time conditions', () => {
    const timestamp = new Date('2023-06-15T10:00:00');
    const conditions = getConditions(timestamp);

    expect(conditions.method).toBe('timelock');
    expect(conditions.returnValueTest.comparator).toBe('>=');
    expect(conditions.returnValueTest.value).toBe(timestamp);
  });
});

describe('encryptVote', () => {
  test('returns the encrypted message', () => {
    const proof = 'abc123';
    const vote = 'yes';
    const timestamp = new Date('2023-06-15T10:00:00');
    const encryptedMessage = encryptVote(proof, vote, timestamp);

    expect(encryptedMessage).toBe('abc123yes');
  });
});

describe('decryptVote', () => {
  test('returns the decrypted vote', () => {
    const ciphertext = 'abc123yes';
    const timestamp = new Date('2023-06-15T10:00:00');
    const decryptedVote = decryptVote(ciphertext, timestamp);

    expect(decryptedVote).toBe(ciphertext);
  });
});


import random
import string


def generate_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation

    password = [random.choice(string.ascii_lowercase),
                random.choice(string.ascii_uppercase),
                random.choice(string.digits),
                random.choice(string.punctuation)]

    remaining_length = length - len(password)
    for _ in range(remaining_length):
        password.append(random.choice(characters))

    random.shuffle(password)

    return ''.join(password)


if __name__ == "__main__":
    password_length = int(input("Enter the desired password length: "))
    password = generate_password(password_length)
    print("Generated Password:", password)
